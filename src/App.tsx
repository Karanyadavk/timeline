import { Timeline } from './components/Timeline'

function App() {

  return (
    <>
      <div className='mb-48'>
        <Timeline data={[{title: "2018", content: "Hello"}, {title: "2019", content: "How"}, {title: "2020", content: "Are"}, {title: "2021", content: "You"}]} />
      </div>
    </>
  )
}

export default App
