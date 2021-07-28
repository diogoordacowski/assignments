import React from "react"
import Form from "./Form"
import UglyWidget from "./UglyWidget"
import { ThingsContextConsumer } from "./thingsContext"

function App(props) {

    const allUglyThings =
    <ThingsContextConsumer>
        {context => (
            context.uglyThings.map((thing, i) => <UglyWidget
                key={i}
                id={thing._id}
                description={thing.description}
                title={thing.title}
                imgUrl={thing.imgUrl}
                baseUrl={context.baseUrl}
                deleteThing={context.deleteThing}
                saveThing={context.saveThing}
            />)
        ) }
    </ThingsContextConsumer>


    return (
        <div>
            <Form />
            <p>https://i.pinimg.com/originals/b5/a1/89/b5a18995ecb528c9d58a3bb60a34f410.png</p>
            <p>https://images.vexels.com/media/users/3/145135/isolated/lists/76608161d143a7d27f20cdcc336bc09c-sun-sharp-rays-big-and-small-icon.png</p>
            <p>https://icon-library.com/images/small-youtube-icon/small-youtube-icon-25.jpg</p>
            <p>https://icon-library.com/images/small-facebook-icon-for-website/small-facebook-icon-for-website-13.jpg</p>
            {allUglyThings}
        </div>
    )

}

export default App