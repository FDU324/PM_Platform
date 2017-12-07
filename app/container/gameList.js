/**
 * Created by kevintestt on 2017/11/27.
 */
import {connect} from 'react-redux';
import {
    AppRegistry,
    StyleSheet,
    View,
    ListView,
    Text,
    Image,
    TouchableOpacity,
    BackAndroid,
    Platform
} from 'react-native';

/**
 * 触发Action
 */
import {fetchGameList} from '../action/gameListAction';
/**
 * 用于将UI和Reducer绑定
 */
import {connect} from 'react-redux';

class GameList extends Component {
    
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.dataSource = new ListView.DataSource({
            rowHasChanged: ((row1, row2) => row1 !== row2)
        })
    }

    /**
     * 调用数据 :
     *      1. 当触发Action方法请求数据反馈到Reducer中
     *      2. Reducer通过ActionType判断该更新哪个UI中的State
     *      3. 最后刷新界面显示数据
     */
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchGameList(index = 1));

        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', () => this.onBackAndroid());
        }
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', () => this.onBackAndroid());
        }
    }

    /**
     * 监听Android返回按键
     * @returns {boolean}
     */
    onBackAndroid() {

        const {navigator} = this.props;
        if (navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        //退出
        return false;

    }


    render() {
        const {gameListReducer} = this.props;

        return (
            <ListView
                //取数据
                dataSource={this.dataSource.cloneWithRows(gameListReducer.gameList)}
                renderRow={this.renderRow.bind(this)}
            />
        )
    }

    renderRow(rowData) {
        return
    }
}

function mapStateToProps(state) {
    const {gameListReducer} = state;
    return {
        gameListReducer
    }
}

export default connect(mapStateToProps)(GameList);