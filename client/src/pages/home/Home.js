import React, {Component} from 'react';
import NavBar from '../../components/ui/Navbar2/NavTabs';
import PuppyPhoto from '../../assets/images/UI Images/HomePagePuppy.jpeg';

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                {/* <PuppyPhoto /> */}
                <p>This is the Home page</p>
            </div>
        )
    }
}

export default HomePage