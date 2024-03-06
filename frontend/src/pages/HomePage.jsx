import {useAuth} from './../context/AuthContext'

function homepage() {
  const data = useAuth()
  console.log(data)
  return (
    <div>homepage</div>
  )
}

export default homepage