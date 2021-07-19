import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Topbar from '../../components/topbar/Topbar';
import './home.css'

export default function Home() {
  return (
    <div>
      <>
        <Topbar></Topbar>
        <div className='homeContainer'>
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </div>
      </>
    </div>
  );
}
