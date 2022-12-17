import Header from "../../components/Header"
import ColorButton from "../../components/ColorButton"

import BackButton from "../../assets/back.svg"
import ImageButton from "../../assets/image.svg"
import ColorPicker from "../../assets/color-picker.svg"

import "./create-note.css"

export default function CreateNote() {
    return (
        <>
            <Header
                leftButton={{ image: BackButton, url: "/" }}
                rightButton={{ image: ImageButton, url: "/" }}
            />
            <form>
                <input
                    type="text"
                    className="title-input"
                    placeholder="Title..."
                />
                <div className="colors-wrapper">
                    <p>Color:</p>
                    <div className="color-selection">
                        <ColorButton color="#E924B2"></ColorButton>
                        <ColorButton color="#1446F9"></ColorButton>
                        <ColorButton color="#1DF64D"></ColorButton>
                        {/* opens hidden color input */}
                        <label htmlFor="color-input">
                            <img
                                className="color-picker"
                                src={ColorPicker}
                                alt=""
                            />
                        </label>
                        <input type="color" id="color-input" />
                    </div>
                </div>
                <textarea
                    className="note-text"
                    placeholder="Write your text here..."
                />
                <button className="save-button">
                    Save changes
                </button>
            </form>
        </>
    )
}
