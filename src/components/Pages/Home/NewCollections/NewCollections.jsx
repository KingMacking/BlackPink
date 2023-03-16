import newHome1 from '../../../../assets/image/newHome1.png'
import newHome2 from '../../../../assets/image/newHome2.png'

const NewCollections = () => {
    return (
        <section className="flex flex-wrap px-4 py-32 md:px-16 gap-y-16 justify-evenly">
            <article>
                <img src={newHome1}/>
            </article>
            <article>
                <img src={newHome2}/>
            </article>
        </section>
    )
}
export default NewCollections