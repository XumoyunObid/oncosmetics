import FaqBanner from "./banner/FaqBanner"
import FaqFrom from "./faqform/FaqFrom"
import FaqInfo from "./info/FaqInfo"
import FaqNav from "./navlist/FaqNav"

const Questions = () => {
  return (
    <>
      <section>
        <div>
          <FaqBanner/>
          <FaqNav/>
          <FaqInfo/>
          <FaqFrom/>
        </div>
      </section>
    </>
  )
}

export default Questions
