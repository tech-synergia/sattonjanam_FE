import { Card , Button} from 'antd';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;
import '../scss/HomeSuccess.scss'

function HomeSuccess() {
  return (
    <div className='homeSuccess'>
        <h1>Success Stories</h1>
        <div className="successCards">
        <Card
            hoverable
            className='cards'
            cover={<img alt="example" src="https://www.wedgatematrimony.com/wp-content/uploads/2022/04/2.jpg" />}
        >
            <Meta title="Vipul & Nietika" className='name'/>
        </Card>
        <Card
            hoverable
            className='cards'
            cover={<img alt="example" src="https://www.wedgatematrimony.com/wp-content/uploads/2022/04/3.jpg" />}
        >
            <Meta title="Shreya & Ayush" className='name'/>
        </Card>
        <Card
            hoverable
            className='cards'
            cover={<img alt="example" src="https://www.wedgatematrimony.com/wp-content/uploads/2022/04/4.jpg" />}
        >
            <Meta title="Shivika & Jatin" className='name'/>
        </Card>
        <Card
            hoverable
            className='cards'
            cover={<img alt="example" src="https://www.wedgatematrimony.com/wp-content/uploads/2022/04/5.jpg" />}
        >
            <Meta title= "Charika & Rohit" className='name'/>
        </Card>
        </div>
        <Button className='buttonSuccess'><NavLink to={'/successStories'}>View All Success Stories</NavLink></Button>

    </div>
  )
}

export default HomeSuccess
