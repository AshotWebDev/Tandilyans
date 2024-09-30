import  prodVideo from '../../../assets/prodVideo.mp4'

const HomeAboutUsSection = () => {
  return (
    <div className='pb-[100px] flex flex-col gap-[100px]'>
      <h2 className="h2-semibold text-center text-yellow-700">Մեր Մասին</h2>
      <div className="container flex justify-center h-[600px] max-md:flex-col max-md:gap-[30px]">
        <div className='w-[50%] flex items-center justify-center max-md:w-full'>
            <p className='paragraph-regular text-yellow-700 '>Tandilyans բրենդը ստեղծվել է 08․07․2020թ-ին։ Մեր  4 տարիների ընթացքում մենք հասցրել ենք առժանանալ մարդկաց բարձր գնահատականին։ Tandilyans ապրանքանիշի յուրաքանչյուր պրոդուկտ ունի բարձր որակ։ Մենք շեշտը դնում ենք ոչ միայն որակի այլ նաև նրբաճաշակության և էլեգանտության վրա։  Մեզ մոտ կարող եք պատվիրել ցանկացած ճաշակի պայուսակներ։  Ունենք առաքում Երևանի տարածքում։</p>
        </div>

        <div className='w-[50%] max-md:w-full h-full'>
            <video autoPlay loop muted className='h-full w-full object-cover'>
            <source src={prodVideo} type="video/mp4" />
            </video>
        </div>
      </div>
    </div>
  )
}

export default HomeAboutUsSection
