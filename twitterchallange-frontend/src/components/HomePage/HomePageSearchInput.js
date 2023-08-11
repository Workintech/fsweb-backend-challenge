import React from 'react'

function HomePageSearchInput() {
  return (
    <section id="homePageMainSectionInputSection">
      <div id="homePageMainSectionInputWrapper">
      <i id='homePageMainSectionInputWrapperFaFa' className="fa-solid fa-magnifying-glass fa-xl"></i>
        <input 
          id='homePageMainSectionInput'
          data-cy="homePageMainSectionInput"
          type="text"
          placeholder="Arama"
        >
        </input>
      </div>
    </section>
)
}

export default HomePageSearchInput