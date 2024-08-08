export default function Footer(props){

    const {showModel, handleToggleModel,data} = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                {/* '?' is a optional chaining syntax if the title fetched from data doesn't exist */}
                <h2>{data?.title}</h2>
                <h1>A Look Beyond</h1>
            </div>

            {/* Displays side bar content */}
            <button onClick={handleToggleModel}>
                <i className="fa-solid fa-circle-info"></i>
            </button>

        </footer>
    )
}