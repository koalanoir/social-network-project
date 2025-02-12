import React from "react"
import { Commentary } from "@components/index"
import "../Publications.scss"
import "./PubWithText.scss"
import PubHeader from "../comp/PubHeader"
export default function PubWithText(props) {
	const { user, post } = props
	return (
		<div className="publication">
			<PubHeader user={user} />
			<div className="content" onClick={() => console.log(props)}>
				{post}
			</div>
			{/* <Commentary comments={comments} /> */}
		</div>
	)
}
