import React, { PureComponent } from 'react';
//公共组件
import WithFooter from 'components/hocs/withFooter';

// 首页组件
import SearchBar from './components/searchBar';
import Banner from 'components/common/banner';
import Notice from './components/notice';
import HostList from './components/hot/hotList';
import RecomList from './components/recommend/recomList';
import tool from 'utils/tool';

// import { Map, is } from "immutable";
interface State {
  imgList: string[];
  hotGoods: any[];
  searchStyle: any;
}
//虽然在componentWillUnmount中清除事件监听,但setState没有立刻停止，该变量可用于做每次setState的前提条件
let lock = false;
@WithFooter
class Home extends PureComponent<{}, State> {
  // static lock
  constructor(props) {
    super(props);
    this.state = {
      imgList: [''],
      hotGoods: [],
      searchStyle: {}
    };
  }

  componentDidMount() {
    this.getHomeImgList();
    this.getHotGoods();
    window.addEventListener('scroll', e => {
      this.changeSearchStyle(e);
    });
  }

  async componentWillUnmount() {
    lock = true;
    window.removeEventListener('scroll', e => {
      this.changeSearchStyle(e);
    });
  }
  async getHomeImgList() {
    const url = window.$api.banner.getHomeBanner;
    try {
      const res = await window.$http.get(url);
      this.setState({
        imgList: res.data
      });
    } catch (err) {
      window.$commonErrorHandler(url)(err);
    }
  }
  changeSearchStyle(e) {
    const fn = () => {
      if (!lock) {
        const scroTop = document.documentElement.scrollTop;
        if (scroTop > 20) {
          this.setState({
            searchStyle: {
              background: 'rgba(72,173,252,' + (1 * scroTop) / 200 + ')',
              lineHeight: '1rem'
            }
          });
        } else {
          const _c = {
            top: '0',
            background: 'transparent'
          };
          // const map1 = Map(_c);
          // const map2 = Map(this.state.searchStyle);
          // //用 immutable 比较两个对象值是否一致，比深度遍历高效
          // if (is(map1, map2)) {
          //   return;
          // }
          if (tool.checkIfEual(this.state.searchStyle, _c)) {
            return;
          }
          this.setState({
            searchStyle: _c
          });
        }
      }
    };
    //节流
    tool.throttle(fn, 50)();
  }
  async getHotGoods() {
    const url = window.$api.good.getHotGoods;
    try {
      const res = await window.$http.get(url);
      this.setState({
        hotGoods: res.data.rows
      });
    } catch (err) {
      window.$commonErrorHandler(url)(err);
    }
  }
  render() {
    const styleObj1 = {
      position: 'relative',
      top: '-.8rem'
    };
    const { searchStyle, imgList, hotGoods } = this.state;
    return (
      <div style={styleObj1 as React.CSSProperties} id="home" ref="home">
        <div className="home-search-container" style={searchStyle}>
          <SearchBar />
        </div>
        <Banner imgList={imgList} />
        <Notice />
        <div className="content">
          <HostList hotGoods={hotGoods} />
          <div className="hr" />
          <RecomList titleText="最新商品" />
        </div>
      </div>
    );
  }
}
export default Home;
