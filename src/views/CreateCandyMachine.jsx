import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import styled from 'styled-components'
import { NavLink, useHistory } from "react-router-dom";


import {
	MintLayout,
	TOKEN_PROGRAM_ID,
	ASSOCIATED_TOKEN_PROGRAM_ID,
	createInitializeMintInstruction,
	createAssociatedTokenAccountInstruction,
	createMintToInstruction,
	getAssociatedTokenAddress
} from '@solana/spl-token';
const web3 = require('@solana/web3.js');

// TODO get this from metaplex
const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');

export const CreateCandyMachine = () => {
	const { connection } = useConnection();
	const wallet = useWallet();
	let history = useHistory();

	const create = async () => {
		const payer = wallet.publicKey;
		const collectionMint = web3.Keypair.generate();
		const associatedTokenAccount = await getAssociatedTokenAddress(
			collectionMint.publicKey,
			payer
		)
		// let metadataPDA = await web3.PublicKey.findProgramAddress(
		// 	[
		// 		'metadata',
		// 		TOKEN_METADATA_PROGRAM_ID.toBuffer(),
		// 		collectionMint.publicKey.toBuffer()
		// 	],
		// 	TOKEN_PROGRAM_ID
		// );
		// metadataPDA = {
		// 	publicKey: metadataPDA[0],
		// 	bumpSeed: metadataPDA[1]
		// }
		// metadata account = 'metadata' + tokenMetadataPID + Mint
		// master edition account = 'metadata' + tokenMetadataPID + Mint + "edition"

		console.log('payer:', payer.toBase58())
		console.log('collection mint:', collectionMint.publicKey.toBase58())
		console.log('associated token account:', associatedTokenAccount.toBase58())

		const instructions = [
			web3.SystemProgram.createAccount({
				fromPubkey: payer,
				newAccountPubkey: collectionMint.publicKey,
				space: MintLayout.span,
				lamports: await connection.getMinimumBalanceForRentExemption(MintLayout.span),
				programId: TOKEN_PROGRAM_ID,
			}),
			createInitializeMintInstruction(
				collectionMint.publicKey,
				0,
				payer,
				payer,
				TOKEN_PROGRAM_ID,
			),
			createAssociatedTokenAccountInstruction(
				payer,
				associatedTokenAccount,
				payer,
				collectionMint.publicKey,
			),
			createMintToInstruction(
				collectionMint.publicKey,
				associatedTokenAccount,
				payer,
				"1",
				[],
				TOKEN_PROGRAM_ID,
			)
			// Token Metadata Program: Create Metadata Accounts v2 (collection metadata, collection mint, owner, owner, owner)
			// Token Metadata Program: V3 Create Master Edition (collection master edition, collection mint, owner * 3, collection metadata)
			// Candy Machine: Set Collection (candy machine, owner, collection PDA, owner, collection metadata, collection mint, collection master edition, collection authority record)
		];

		const transaction = new web3.Transaction();
		transaction.add(...instructions);
		// const signature = await wallet.sendTransaction(transaction, connection);
		const signature = await wallet.sendTransaction(
			transaction,
			connection,
			{ signers: [collectionMint] }
		);
		// const signature = await web3.sendAndConfirmTransaction(
		// 	connection,
		// 	transaction,
		// 	[collectionMint],
		// );
		console.log('signature', signature);
		connection.onSignature(signature, (result, context) => {
			if (result.err) {
				console.log('Transaction rejected.');
				history.push('/view_contract')
			}
			else {
				console.log('Transaction confirmed.');
				history.push('/view_contract')
			}
		}, 'processed');
	}


	return (
		<Container>
			<Button>
				{!wallet.connected ?
					<WalletMultiButton>Connect</WalletMultiButton>
					:
					<DeployButton onClick={create}>Deploy</DeployButton>
				}
			</Button>
		</Container>
	)
}

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 50px;
`

const Button = styled.div`

`

const DeployButton = styled.div`
	width: 100px;
	height: 40px;
	background-color: #ed3724;
	color: #fff;
	cursor: pointer;
	font-size: 12px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	&:hover {
		box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
	}
`;