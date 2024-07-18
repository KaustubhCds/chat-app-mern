import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-300 p-4 flex flex-col bg-white'>
			<SearchInput />
			<div className='my-4 border-t border-slate-300'></div>
			<Conversations />
			<div className='mt-auto'>
				<LogoutButton />
			</div>
		</div>
	);
};
export default Sidebar;
