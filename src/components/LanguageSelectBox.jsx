import { useState } from "react";

const LanguageSelectBox = () => {
  const languages = [
    {
      lang: "eng",
      img: "https://cdn-icons-png.flaticon.com/256/1377/1377975.png",
    },
    {
      lang: "de",
      img: "https://cdn4.vectorstock.com/i/1000x1000/40/08/german-language-sign-icon-de-deutschland-vector-2874008.jpg",
    },
    {
      lang: "tr",
      img: "https://cdn4.vectorstock.com/i/1000x1000/41/58/turkish-language-sign-icon-tr-translation-vector-2874158.jpg",
    },
  ];

  const [toggle, setToggle] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    lang: "Select Language",
    img: "",
  });

  const toggleBox = () => {
    setToggle(!toggle);
  };

  const updateLang = (item) => {
    setSelectedLang(item);
    setToggle(false);
  };

  return (
    <div className="lang-box">
      <div className="lang-box__wrapper" onClick={toggleBox}>
        {selectedLang.img && (
          <img
            src={selectedLang.img}
            alt={selectedLang.lang}
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
        )}
        {selectedLang.lang}
      </div>
      {toggle && (
        <ul className="lang-box__option">
          {languages.map((item, index) => (
            <li key={index} onClick={() => updateLang(item)}>
              <img
                src={item.img}
                alt={item.lang}
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              {item.lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelectBox;
