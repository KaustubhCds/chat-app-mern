import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex h-screen rounded-lg overflow-hidden bg-gray-100 shadow-lg'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
