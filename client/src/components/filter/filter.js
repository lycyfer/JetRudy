import "./filter.css"
import { CSharpIcon, HaskellIcon, JavaIcon, JavaScriptIcon, Rudy, TypeScriptIcon } from "./lang";


const Filter = () => {

    const languages = [
        { name: 'JavaScript', icon: <JavaScriptIcon /> },
        { name: 'Java', icon: <JavaIcon /> },
        { name: 'Swift', icon: <Rudy /> },
        { name: 'C#', icon: <CSharpIcon /> },
        { name: "Haskell", icon: <HaskellIcon /> }
    ];

    return (
        <div className="filter">
            {languages.map((language, index) => (
                <button key={index} className="filter-button">
                    {language.icon}
                    {/* <span>{language.name}</span> */}
                </button>
            ))}
        </div>
    )
}

export default Filter