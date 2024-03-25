import {useAuth} from './../context/AuthContext'
import { Card } from "./../components/ui";


function homepage() {
  const data = useAuth()
  return (
    <div>
      <Card>
        <h1 className='text-3xl font-bold'>Homepage</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus eum facilis, iusto consectetur totam odit sapiente repellendus neque ea dolores minus hic non harum ab dolor ut porro omnis, id velit quo? Eligendi officiis sit consequatur reprehenderit, voluptatem aliquid.</p>
      </Card>
    
    </div>
  )
}

export default homepage