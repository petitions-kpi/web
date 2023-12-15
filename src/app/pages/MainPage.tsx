'use client'

import "../styles/main.css"
import Button from './Button'
import Petitions from "../components/PetitionsBox"

const MainPage = () => {
    return (
        <div className="slide">
            <div className="div">
                <div className="overlap">
                    <div className="overlap-group">
                        <div className="overlap-group-2">
                            <img className="logo" alt="Logo" src="/img/logo-1.png" />
                            <div className="rectangle" />
                            <div className="text-wrapper">Активні петиції</div>
                        </div>
                        <div className="text-wrapper-2">Електронні петиції КПІ</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-3">Популярні петиції</div>
                    </div>
                </div>
                <Button />
                <div className="main-container">
                    <div className="main-petition">
                        <Petitions sortOrder="active" />
                        <Petitions sortOrder="popular" />
                    </div>
                    <img className="main-image" alt="Main image" src="/img/main-image-1.png" />
                </div>
            </div>
        </div>
    )
}

export default MainPage;