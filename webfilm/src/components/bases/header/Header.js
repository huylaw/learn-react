import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import "./Header.scss";

export default function Header() {
    return(
        <div className="container-header">
            <div className="head1">
                <MenuIcon/>
                <h3>INTS</h3>
            </div>
            <div className="head2">
                <img alt="img" src="https://nhanvat.wiki/wp-content/uploads/2023/02/hai-ba-dong-3d.jpg"/>
                <h4>Test</h4>
                <ArrowDropDownIcon/>
            </div>
        </div>
    );
}

