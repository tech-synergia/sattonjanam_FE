import { Card, Typography } from "antd";
import "../scss/ServiceCard.scss";
import Maharastrian from '../assets/maharastrian.jpg'
import { NavLink } from "react-router-dom";

const { Title, Text } = Typography;

const weddingData = [
  {
    _id: 1,
    title: (
      <NavLink to={"/punjabi-matrimonial-services"}>Punjabi Matrimonial Service</NavLink>
    ),
    content:
      "As a part of this, the bridegroom is made to wear a turban and a headgear or sehera, which covers his face. The traditional baraat includes the groom, who rides his horse (or rather mare) and reaches the wedding venue where the ceremonies take place, with his close family and friends dancing as a part of the baraat.",
    imageUrl:
      "https://www.imperial.wedding/storage/cms_pages/thumb/310521014627-punjabi.jpg",
  },
  {
    _id: 2,
    title: (
      <NavLink to={"/sikh-matrimonial-services"}>Sikh Matrimonial Service</NavLink>
    ),
    content:
      "The Sikh marriage is a very colourful and unique ceremony in which two individuals are joined in a partnership of two equals. The couple will marry in front of the Guru Granth Sahib while the guests gather around the couple, usually with men on one side and women on the other.",
    imageUrl:
      "https://www.imperial.wedding/storage/cms_pages/thumb/310521014336-sikh.jpg",
  },
  {
    _id: 3,
    title: (
      <NavLink to={"/hindu-matrimonial-services"}>Hindu Matrimonial Service</NavLink>
    ),
    content:
      "It is a religious necessity rather than a mere physical luxury. Hindu Marriage is a tie that can never be broken and it is a relation established from birth to birth.",
    imageUrl:
      "https://www.hindumatrimony.net/assets/story/15525766862070646525.jpg",
  },
  {
    _id: 4,
    title: (
      <NavLink to={"/jain-matrimonial-services"}>Jain Matrimonial Services</NavLink>
    ),
    content:
      "Jain marriage is announced through a tilak. The bride's family visits the groom's family and gifts and sweets are exchanged along with a tilak ceremony of the groom.",
    imageUrl:
      "https://www.imperial.wedding/storage/cms_pages/thumb/310521015221-Jain.jpg",
  },
  {
    _id: 5,
    title: (
      <NavLink to={"/maharastrian-matrimonial-services"}>Maharashtrian Matrimonial Services</NavLink>
    ),
    content:
      "Like many other auspicious Maharashtrian occasions, the wedding day commences with the worship of Lord Ganesha. Ganpati Puja is performed for a bright future of the couple. The family deity is then invited at the wedding Mandap by Devdevak. In Gurihar Puja, the bride all dressed up in her wedding attire, worships to the goddess Parvati for her prosperous life. The maternal uncle of the bride gives her some rice which, she then offers to the Goddess.",
    imageUrl: Maharastrian  
  },
  {
    _id: 6,
    title: (
      <NavLink to={"/elite-matrimonial-services"}>Elite Matrimonial Service</NavLink>
    ),
    content:
      "With India’s fast paced economic development, and the ever expanding upper middle and rich class, the demand for an elite...",
    imageUrl:
      "https://www.elitematrimony.com/revamp-images/elite-matchmaking-mobile-banner-2.png",
  },
  {
    _id: 7,
    title: (
      <NavLink to={"/nri-matrimonial-services"}>NRI Matrimonial Service</NavLink>
    ),
    content:
      "NRI marriages', as generally understood, are between an Indian woman from India and an Indian man residing in another country (thus NRI – non-resident Indian), either as Indian citizen (when he would legally be an 'NRI') or as citizen of that other country (when he would legally be a PIO – person of Indian origin).",
    imageUrl:
      "https://www.imperial.wedding/storage/blogs/290622040425-NRIMarriageBureau.jpg",
  },
  {
    _id: 8,
    title: (
      <NavLink to={"/late-marriage-matrimonial-services"}>Late Marriage Matrimony</NavLink>
    ),
    content:
      "Nowadays, both men and women prefer late marriage because they want economic empowerment in their life. Also, if these people study in universities or for master's or Ph. D., their marriage age would be late. On the other hand, career targets make people delay their marriages even if they have a partner in their life.",
    imageUrl:
      "https://imarriages.com/m/images/m-free-matrimony.jpg",
  },
  {
    _id: 9,
    title: (
      <NavLink to={"/re-marriage-services"}>Re-Marriage Services</NavLink>
    ),
    content:
      "A marriage can fail because of reasons like communication gaps, adjustment issues, lack of compassion, domestic violence, or any other...",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGghJzhYmJvuBSC2BiQrsIJHGBYFa6xZT5jUiOvSicRrdLfQQ9QIcAGCgMQdVXUCt6idA&usqp=CAU",
  },
  {
    _id: 10,
    title: (
      <NavLink to={"/wedding"}>Wedding Events Services</NavLink>
    ),
    content:
      "From coordinating your recce trip to finalizing your wedding we cover all under our cloud. So now you can say goodbye to the inconvenience of running around. Let our team do the running around while you enjoy the event with your loved ones.",
    imageUrl:
      "https://cdn0.weddingwire.in/vendor/4308/3_2/960/jpeg/wedding-planner-rp-events-stage-decor-7_15_294308-160800708459494.jpeg",
  },
  {
    _id: 11,
    title: (
      <NavLink to={"/agarwal-matrimonial-services"}>Aggarwal | Gupta | Baniya</NavLink>
    ),
    content:
      "Aggarwal / Gupta / Baniya caste hails from the Vaishya caste which is considered to be a mercantile clan of...",
    imageUrl:
      "https://www.saathimere.com/matrimonial-service/img/Agarwal-Matrimonial-Services.jpg",
  },
  {
    _id: 12,
    title: (
      <NavLink to={"/second-marriage-services"}>Second Marriage</NavLink>
    ),
    content:
      "Second Marriage caste hails from the Vaishya caste which is considered to be a mercantile clan of...",
    imageUrl:
      "https://2.bp.blogspot.com/-CYn6hd-Xls4/WYc5UMLZdnI/AAAAAAAAIdg/B0JPled64lQN_MaXKfYUoZbypFCySk8egCLcBGAs/s640/Married-widows-free-matrimonial-sites-for-widows-Second-Marriage-Matrimonial-Sites.jpg",
  },
 
]
export const WeddingImage = () => {
  return (
    <div className="details">
      {weddingData.map((dataItem) => (
        <Card className="card">
            <img src={dataItem.imageUrl} alt="" />
            <div className="text-info">
                <Title level={3} className="titleService">{dataItem.title}</Title>
                <Text className="content"> {dataItem.content} </Text>
            </div>
        </Card>
      ))}
    </div>
  );
};

function ServiceCard() {
  return <WeddingImage />;
}

export default ServiceCard;
