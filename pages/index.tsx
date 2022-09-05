import type {NextPage} from 'next'
import {Text} from '../providers/TranslationsProvider'

const Home: NextPage = () => {
    return (
        <div>
            Test

            <Text id="section.day.title"/>
            <Text id="section.day.body"/>
        </div>
    )
}

export default Home
