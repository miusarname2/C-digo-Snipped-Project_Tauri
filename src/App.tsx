import FormSnip from './components/formSniped'
import FormEditor from './components/snippedEditor'
import FormList from './components/snippedList'

export default function App() {
  return (
    <div className='h-screen text-white grid grid-cols-10'>

      <div className="col-6 bg-zinc-950">
      <FormSnip/>
      <FormList/>
      </div>
      <div className="col-span-9 bg-neutral-950 flex justify-center items-center" >
      <FormEditor/>
      </div>
    </div>
  )
}
