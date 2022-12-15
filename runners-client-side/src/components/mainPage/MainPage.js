import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"


export const MainPage = () => {
   

    return (
        <main style={{ textAlign: "center" }}>
            <article className="mainPage">
                <img src="https://www.shutterstock.com/image-photo/young-woman-runner-running-on-600w-359568020.jpg"/>
                <div>This will have a welcome message and explain what the webpage is all abouts simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containin </div>
            </article>
           
        </main>
    )
}