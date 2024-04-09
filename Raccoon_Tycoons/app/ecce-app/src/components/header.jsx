import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import { animateScroll as scroll } from 'react-scroll';


export default function Header() {

return (
        <header>
                <span className="text-2xl pl-28 pr-56 pt-5 pb-5"
                style={{ backgroundColor: "rgba(40, 44, 73, 0.9)", position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2 }}>
                        <a href="#" onClick={() => scroll.scrollToTop({ duration: 500 })} className="mr-10"> Home <HomeIcon/> </a>
                        <a href="#" onClick={() => scroll.scrollToBottom({ duration: 500 })} className="mr-10"> Team <GroupIcon/> </a>
                        <a href="https://experience.arcgis.com/experience/10a4405ff6a94cc8b87dffc3c01c0d45/" target="_blank">
                                Experience <OpenInNewIcon fontSize='small'/>
                        </a>
                </span>
        </header>
);
}