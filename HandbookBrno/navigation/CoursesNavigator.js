/*react navigation components */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/*We import screen components */
import HomeScreen from '../screens/HomeScreen';
import GuideListScreen from '../screens/GuidesListScreen';
import GuideDetailsScreen from '../screens/GuideDetailsScreen';
import CheckBoxListScreen from '../screens/CheckBoxListScreen';
import CheckBoxListDetailsScreen from '../screens/CheckBoxDetailsScreen';

/*This is how we set routes nameOfRoute: ScreenComponent
We can also set additional properties with nameOfRoute: {} object but thats for later*/
const CourseNavigator = createStackNavigator({
    Home: HomeScreen,
    GuideList: GuideListScreen,
    GuideDetails: GuideDetailsScreen,
    CheckBoxList: CheckBoxListScreen,
    CheckBoxDetails: CheckBoxListDetailsScreen,
});

export default createAppContainer(CourseNavigator);