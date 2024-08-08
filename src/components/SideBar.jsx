export default function SideBar(props){

    const {handleToggleModel, data} = props

    return(
        <div className="sidebar">
            {/* Closes side bar by clicking the over lay image */}
            <div onClick={handleToggleModel} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div>
                    <p className="date">{data?.date}</p><br></br>
                    <p>{data?.explanation}</p>
                </div>
                {/* Closes side bar by clicking the right arrow icon */}
                <button onClick={handleToggleModel}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}