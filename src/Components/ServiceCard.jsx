import { Card, Typography } from "antd";
import "../scss/ServiceCard.scss";
import Astrologer from '../assets/astrologer.jpeg'

const { Title, Text } = Typography;

const weddingData = [
  {
    _id: 1,
    title: (
      <a href="/punjabi-matrimonial-services">Punjabi Matrimonial Service</a>
    ),
    content:
      "As a part of this, the bridegroom is made to wear a turban and a headgear or sehera, which covers his face. The traditional baraat includes the groom, who rides his horse (or rather mare) and reaches the wedding venue where the ceremonies take place, with his close family and friends dancing as a part of the baraat.",
    imageUrl:
      "https://www.imperial.wedding/storage/cms_pages/thumb/310521014627-punjabi.jpg",
  },
  {
    _id: 2,
    title: (
      <a href="/sikh-matrimonial-services">Sikh Matrimonial Service</a>
    ),
    content:
      "The Sikh marriage is a very colourful and unique ceremony in which two individuals are joined in a partnership of two equals. The couple will marry in front of the Guru Granth Sahib while the guests gather around the couple, usually with men on one side and women on the other.",
    imageUrl:
      "https://www.imperial.wedding/storage/cms_pages/thumb/310521014336-sikh.jpg",
  },
  {
    _id: 3,
    title: (
      <a href="/hindu-matrimonial-services">Hindu Matrimonial Service</a>
    ),
    content:
      "It is a religious necessity rather than a mere physical luxury. Hindu Marriage is a tie that can never be broken and it is a relation established from birth to birth.",
    imageUrl:
      "https://www.hindumatrimony.net/assets/story/15525766862070646525.jpg",
  },
  {
    _id: 4,
    title: (
      <a href="/jain-matrimonial-services">Jain Matrimonial Services</a>
    ),
    content:
      "Jain marriage is announced through a tilak. The bride's family visits the groom's family and gifts and sweets are exchanged along with a tilak ceremony of the groom.",
    imageUrl:
      "https://www.imperial.wedding/storage/cms_pages/thumb/310521015221-Jain.jpg",
  },
  {
    _id: 5,
    title: (
      <a href="/elite-matrimonial-services">Elite Matrimonial Service</a>
    ),
    content:
      "With India’s fast paced economic development, and the ever expanding upper middle and rich class, the demand for an elite...",
    imageUrl:
      "https://www.elitematrimony.com/revamp-images/elite-matchmaking-mobile-banner-2.png",
  },
  {
    _id: 6,
    title: (
      <a href="/nri-matrimonial-services">NRI Matrimonial Service</a>
    ),
    content:
      "NRI marriages', as generally understood, are between an Indian woman from India and an Indian man residing in another country (thus NRI – non-resident Indian), either as Indian citizen (when he would legally be an 'NRI') or as citizen of that other country (when he would legally be a PIO – person of Indian origin).",
    imageUrl:
      "https://www.imperial.wedding/storage/blogs/290622040425-NRIMarriageBureau.jpg",
  },
  {
    _id: 7,
    title: (
      <a href="/late-marriage-matrimonial-services">Late Marriage Matrimony</a>
    ),
    content:
      "Nowadays, both men and women prefer late marriage because they want economic empowerment in their life. Also, if these people study in universities or for master's or Ph. D., their marriage age would be late. On the other hand, career targets make people delay their marriages even if they have a partner in their life.",
    imageUrl:
      "https://imarriages.com/m/images/m-free-matrimony.jpg",
  },
  {
    _id: 8,
    title: (
      <a href="/re-marriage-services">Re-Marriage Services</a>
    ),
    content:
      "A marriage can fail because of reasons like communication gaps, adjustment issues, lack of compassion, domestic violence, or any other...",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGghJzhYmJvuBSC2BiQrsIJHGBYFa6xZT5jUiOvSicRrdLfQQ9QIcAGCgMQdVXUCt6idA&usqp=CAU",
  },
  {
    _id: 9,
    title: (
      <a href="/astrologer">Astrologer</a>
    ),
    content:
      "Portfolio & Wedding Shoots by Celebrity Photographer, Sachin Kumar, Wedgate Matrimony’s Exclusive Associate Sachin Kumar has captured various shoots of...",
    imageUrl: Astrologer
  },
  {
    _id: 10,
    title: (
      <a href="/wedding">Wedding Events Services</a>
    ),
    content:
      "From coordinating your recce trip to finalizing your wedding we cover all under our cloud. So now you can say goodbye to the inconvenience of running around. Let our team do the running around while you enjoy the event with your loved ones.",
    imageUrl:
      "https://cdn0.weddingwire.in/vendor/4308/3_2/960/jpeg/wedding-planner-rp-events-stage-decor-7_15_294308-160800708459494.jpeg",
  },
  {
    _id: 11,
    title: (
      <a href="/agarwal-matrimonial-services">Aggarwal | Gupta | Baniya</a>
    ),
    content:
      "Aggarwal / Gupta / Baniya caste hails from the Vaishya caste which is considered to be a mercantile clan of...",
    imageUrl:
      "https://www.saathimere.com/matrimonial-service/img/Agarwal-Matrimonial-Services.jpg",
  },
  {
    _id: 12,
    title: (
      <a href="/second-marriage-services">Second Marriage</a>
    ),
    content:
      "Second Marriage caste hails from the Vaishya caste which is considered to be a mercantile clan of...",
    imageUrl:
      "https://2.bp.blogspot.com/-CYn6hd-Xls4/WYc5UMLZdnI/AAAAAAAAIdg/B0JPled64lQN_MaXKfYUoZbypFCySk8egCLcBGAs/s640/Married-widows-free-matrimonial-sites-for-widows-Second-Marriage-Matrimonial-Sites.jpg",
  },
];

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
