import React, { Component } from "react";
import { Flex } from 'antd-mobile';
import './home.less';
export default class Home extends Component{

    state = {
        categoryList: [{
            id: 1,
            img: require('@src/public/img/组 25(2).png'),
            text: '平台愿景'
        }, {
            id: 2,
            img: require('@src/public/img/组 25(3).png'),
            text: '贴身短打'
        }, {
            id: 3,
            img: require('@src/public/img/组 25(4).png'),
            text: '武学智慧'
        }, {
            id: 4,
            img: require('@src/public/img/组 25(5).png'),
            text: '公益行'
        }, {
            id: 5,
            img: require('@src/public/img/组 25(6).png'),
            text: '教子有道'
        }, {
            id: 6,
            img: require('@src/public/img/组 25(7).png'),
            text: '生命一线'
        }, {
            id: 7,
            img: require('@src/public/img/组 25(8).png'),
            text: '健康有道'
        }, {
            id: 8,
            img: require('@src/public/img/组 25(9).png'),
            text: '见证成长'
        }, {
            id: 9,
            img: require('@src/public/img/组 25(10).png'),
            text: '武术研究院'
        }, {
            id: 10,
            img: require('@src/public/img/组 25(11).png'),
            text: '全部分类'
        }]
    };

    buyVip () {
        this.props.history.push('/auth/vip');
    }

    render() {

        return (<div id="home">
            <div className="home-top">
                <div className="top-search">
                    <img src={ require('@src/public/img/形状 3.png')} alt="图片"/>
                    <input type="text" placeholder="搜索您感兴趣的课程"/>
                </div>
                <div className="top-message">
                    <img src={ require('@src/public/img/形状 530.png') } alt="消息"/>
                    <span>消息</span>
                </div>
            </div>
            <div className="home-center">
                <img src={require('@src/public/img/组 25(1).png')} alt="最新消息"/>
                <span className="divide-split"/>
                <h3>强我国人 弘我国魂 助力奥运梦</h3>
            </div>
            <div className="home-content">
                <div className="content-top">
                    <img src={require('@src/public/img/组 8.png')} alt="最新资讯"/>
                    <div className="content-message">
                        <span className="message-span">
                            <p>会员专享－《百年望族》线下课程...</p>
                            <span>03-18</span>
                        </span>
                        <span className="message-span">
                            <p>一个家庭最大的悲哀，不是贫穷的...</p>
                            <span>03-18</span>
                        </span>
                    </div>
                    <div className="content-arrow">
                        ＞
                    </div>
                </div>
                <div className="content-second">
                    <div className="second-box" style={{background: 'rgba(253,246,244,1)'}}>
                        <img src={require('@src/public/img/组 14.png')} alt="图标"/>
                        <p>访谈直播</p>
                    </div>
                    <div className="second-box" style={{background:'rgba(253,250,242,1)'}}>
                        <img src={require('@src/public/img/组 15.png')} alt="图标"/>
                        <p>音频</p>
                    </div>
                    <div className="second-box" style={{background: 'rgba(251,246,253,1)'}}>
                        <img src={require('@src/public/img/组 16.png')} alt="图标"/>
                        <p>会员政策</p>
                    </div>
                    <div className="second-box" style={{background: 'rgba(251,246,253,1)'}}>
                        <img src={require('@src/public/img/组 16(1).png')} alt="图标"/>
                        <p>网站帮助</p>
                    </div>
                </div>
                <div className="content-third">
                    {
                        this.state.categoryList.map(item => {
                            return (
                                <div className="third-box" key={item.id}>
                                    <img src={item.img} alt="图标"/>
                                    <p>{item.text}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="content-fourth">
                    <span className="content-split" />
                </div>
                <div className="content-fifth">
                    <div className="fifth-top">
                        <h1>最新更新</h1>
                        <div className="rightBar">
                            <span>查看更多</span>
                            <img src={require('@src/public/img/组 25(14).png')} style={{width: '.26rem', height: '.26rem'}}/>
                        </div>
                    </div>
                    <div className="fifth-bottom">
                        <div className="bottom-left">
                            <div className="left-title">
                                <img src={require('@src/public/img/组 25(13).png')} alt=""/>
                                <span className="class-span-common">贴身卫拳</span>
                            </div>
                            <p>当歹徒双手掐您脖子的时 候，可以...</p>
                            <div className="left-center">
                                <span className="class-teacher">未知老师</span>
                                <span className="center-split"/>
                                <span className="class-count">1节</span>
                            </div>
                            <div className="left-bottom">
                                <span className="class-price">¥110.00</span>
                                <span className="vip-free">VIP免费</span>
                            </div>
                        </div>
                        <div className="bottom-right">
                            <img src={require('@src/public/img/组26.png')} alt="图片"/>
                            <span className="play-video"><img src={require('@src/public/img/形状 1578.png')} alt="图片"/></span>
                        </div>
                    </div>
                </div>
                <div className="content-fifth">
                    <div className="fifth-top">
                        <h1>必看课程</h1>
                        <div className="rightBar">
                            <span>查看更多</span>
                            <img src={require('@src/public/img/组 25(14).png')} style={{width: '.26rem', height: '.26rem'}}/>
                        </div>
                    </div>
                    <div className="sixth-bottom">
                        <div className="bottom-left" style={{marginTop: '.15rem'}}>
                            <div className="left-img" style={{position: 'relative'}}>
                                <img src={require('@src/public/img/组27.png')} alt="图片" style={{width: '3.3rem', height: '2.4rem'}}/>
                                <span className="play-video" style={{top: '37%', left:'40%'}}><img src={require('@src/public/img/形状 1578.png')} alt="图片"/></span>
                            </div>
                            <div className="left-one">
                                <span className="is-finish" style={{marginRight: '.1rem'}}>已完结</span>
                                <span className="class-span-common">奥运之梦</span>
                            </div>
                            <div className="left-two" style={{marginTop: '.15rem'}}>
                                <span className="class-teacher">未知老师</span>
                                <span className="center-split"/>
                                <span className="class-count">1节</span>
                            </div>
                            <div className="left-three" style={{marginTop: '.15rem'}}>
                                <span className="class-price">¥110.00</span>
                                <span className="vip-free">VIP免费</span>
                            </div>
                        </div>
                        <div className="bottom-left" style={{marginTop: '.15rem'}}>
                            <div className="left-img" style={{position: 'relative'}}>
                                <img src={require('@src/public/img/组28.png')} alt="图片" style={{width: '3.3rem', height: '2.4rem'}}/>
                                <span className="play-video" style={{top: '37%', left:'40%'}}><img src={require('@src/public/img/形状 1578.png')} alt="图片"/></span>
                            </div>
                            <div className="left-one">
                                <span className="is-finish" style={{marginRight: '.1rem'}}>已完结</span>
                                <span className="class-span-common">奥运之梦</span>
                            </div>
                            <div className="left-two" style={{marginTop: '.15rem'}}>
                                <span className="class-teacher">未知老师</span>
                                <span className="center-split"/>
                                <span className="class-count">1节</span>
                            </div>
                            <div className="left-three" style={{marginTop: '.15rem'}}>
                                <span className="class-price">¥110.00</span>
                                <span className="vip-free">VIP免费</span>
                            </div>
                        </div>
                    </div>
                    <div className="seventh-banner">
                        <img src={require('@src/public/img/广告banner.png')} alt="banner"/>
                    </div>
                    <div className="content-fifth">
                        <div className="fifth-top">
                            <h1>贴身短打</h1>
                            <div className="rightBar">
                                <span>查看更多</span>
                                <img src={require('@src/public/img/组 25(14).png')} style={{width: '.26rem', height: '.26rem'}}/>
                            </div>
                        </div>
                        <div className="eighth-content">
                            <div className="flex-row">
                                <div className="row-left">
                                    <img src={require('@src/public/img/组29.png')} alt="图片"/>
                                </div>
                                <div className="row-right">
                                    <div className="floor">
                                        <div className="right-row-left">
                                            <span className="no-finish">未完成</span>
                                            <span className="class-span-common">贴身卫拳</span>
                                        </div>
                                        <div className="right-row-right">
                                            <span className="vip-free" style={{marginRight: '0'}}>VIP免费</span>
                                        </div>
                                    </div>
                                    <div className="floor1">
                                        <span className="class-teacher">未知老师</span>
                                        <span className="center-split"/>
                                        <span className="class-count">1节</span>
                                        <span className="class-price" style={{marginLeft: '.2rem'}}>¥110.00</span>
                                        <span className="class-old-price" style={{marginLeft: '.15rem'}}>¥99.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="eighth-content">
                            <div className="flex-row">
                                <div className="row-left">
                                    <img src={require('@src/public/img/组29.png')} alt="图片"/>
                                </div>
                                <div className="row-right">
                                    <div className="floor">
                                        <div className="right-row-left">
                                            <span className="no-finish">未完成</span>
                                            <span className="class-span-common">贴身桩功</span>
                                        </div>
                                        <div className="right-row-right">
                                            <span className="vip-free" style={{marginRight: '0'}}>VIP免费</span>
                                        </div>
                                    </div>
                                    <div className="floor1">
                                        <span className="class-teacher">未知老师</span>
                                        <span className="center-split"/>
                                        <span className="class-count">1节</span>
                                        <span className="class-price" style={{marginLeft: '.2rem'}}>¥110.00</span>
                                        <span className="class-old-price" style={{marginLeft: '.15rem'}}>¥99.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="eighth-content">
                            <div className="flex-row">
                                <div className="row-left">
                                    <img src={require('@src/public/img/组29.png')} alt="图片"/>
                                </div>
                                <div className="row-right">
                                    <Flex className="floor">
                                        <div className="right-row-left">
                                            <span className="no-finish">未完成</span>
                                            <span className="class-span-common">贴身卫拳</span>
                                        </div>
                                        <div className="right-row-right">
                                            <span className="vip-free" style={{marginRight: '0'}}>VIP免费</span>
                                        </div>
                                    </Flex>
                                    <div className="floor1">
                                        <span className="class-teacher">未知老师</span>
                                        <span className="center-split"/>
                                        <span className="class-count">1节</span>
                                        <span className="class-price" style={{marginLeft: '.2rem'}}>¥110.00</span>
                                        <span className="class-old-price" style={{marginLeft: '.15rem'}}>¥99.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-fifth">
                        <div className="fifth-top">
                            <h1>武学智慧</h1>
                            <div className="rightBar">
                                <span>查看更多</span>
                                <img src={require('@src/public/img/组 25(14).png')} style={{width: '.26rem', height: '.26rem'}}/>
                            </div>
                        </div>
                        <div className="sixth-bottom">
                            <div className="bottom-left" style={{marginTop: '.15rem'}}>
                                <div className="left-img" style={{position: 'relative'}}>
                                    <img src={require('@src/public/img/组27.png')} alt="图片" style={{width: '3.3rem', height: '2.4rem'}}/>
                                    <span className="play-video" style={{top: '37%', left:'40%'}}><img src={require('@src/public/img/形状 1578.png')} alt="图片"/></span>
                                </div>
                                <div className="left-one">
                                    <span className="is-finish" style={{marginRight: '.1rem'}}>已完结</span>
                                    <span className="class-span-common">运用道德经智...</span>
                                </div>
                                <div className="left-two" style={{marginTop: '.15rem'}}>
                                    <div className="two-bar">
                                        <span className="class-teacher">未知老师</span>
                                        <span className="center-split"/>
                                        <span className="class-count">2节</span>
                                    </div>
                                </div>
                                <div className="left-three" style={{marginTop: '.15rem'}}>
                                    <span className="class-price">¥59.00</span>
                                    <span className="vip-free">VIP免费</span>
                                </div>
                            </div>
                            <div className="bottom-left" style={{marginTop: '.15rem'}}>
                                <div className="left-img" style={{position: 'relative'}}>
                                    <img src={require('@src/public/img/组28.png')} alt="图片" style={{width: '3.3rem', height: '2.4rem'}}/>
                                    <span className="play-video" style={{top: '37%', left:'40%'}}><img src={require('@src/public/img/形状 1578.png')} alt="图片"/></span>
                                </div>
                                <div className="left-one">
                                    <span className="is-finish" style={{marginRight: '.1rem'}}>已完结</span>
                                    <span className="class-span-common">中国古典宫廷...</span>
                                </div>
                                <div className="left-two" style={{marginTop: '.15rem'}}>
                                    <div className="two-bar">
                                        <span className="class-teacher">未知老师</span>
                                        <span className="center-split"/>
                                        <span className="class-count">2节</span>
                                    </div>
                                </div>
                                <div className="left-three" style={{marginTop: '.15rem'}}>
                                    <span className="class-price">¥66.00</span>
                                    <span className="vip-free">VIP免费</span>
                                </div>
                            </div>
                        </div>
                        <div className="seventh-banner">
                            <img src={require('@src/public/img/广告banner拷贝.png')} alt="banner"/>
                        </div>
                    </div>
                    <div className="content-fifth">
                        <div className="fifth-top">
                            <h1>教子有道</h1>
                            <div className="rightBar">
                                <span>查看更多</span>
                                <img src={require('@src/public/img/组 25(14).png')} style={{width: '.26rem', height: '.26rem'}}/>
                            </div>
                        </div>
                        <div className="eighth-content">
                            <div className="flex-row">
                                <div className="row-left">
                                    <img src={require('@src/public/img/组31.png')} alt="图片"/>
                                </div>
                                <div className="row-right">
                                    <div className="floor">
                                        <div className="right-row-left">
                                            <span className="no-finish">未完成</span>
                                            <span className="class-span-common">贴身卫拳</span>
                                        </div>
                                        <div className="right-row-right">
                                            <span className="vip-free" style={{marginRight: '0'}}>VIP免费</span>
                                        </div>
                                    </div>
                                    <div className="floor1">
                                        <span className="class-teacher">未知老师</span>
                                        <span className="center-split"/>
                                        <span className="class-count">1节</span>
                                        <span className="class-price" style={{marginLeft: '.2rem'}}>¥128.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="eighth-content">
                            <div className="flex-row">
                                <div className="row-left">
                                    <img src={require('@src/public/img/组26.png')} alt="图片"/>
                                </div>
                                <div className="row-right">
                                    <div className="floor">
                                        <div className="right-row-left">
                                            <span className="no-finish">未完成</span>
                                            <span className="class-span-common">贴身桩功</span>
                                        </div>
                                        <div className="right-row-right">
                                            <span className="vip-free" style={{marginRight: '0'}}>VIP免费</span>
                                        </div>
                                    </div>
                                    <div className="floor1">
                                        <span className="class-teacher">未知老师</span>
                                        <span className="center-split"/>
                                        <span className="class-count">1节</span>
                                        <span className="class-price" style={{marginLeft: '.2rem'}}>¥94.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-fifth">
                        <div className="fifth-top">
                            <div className="leftBar">
                                <img src={require('@src/public/img/形状 1588.png')} alt="图片" style={{width: '.75rem', height: '.73rem', marginTop: '.1rem'}}/>
                                <h1>明师讲堂</h1>
                            </div>
                            <div className="rightBar">
                                <span>查看更多</span>
                                <img src={require('@src/public/img/组 25(14).png')} style={{width: '.26rem', height: '.26rem'}}/>
                            </div>
                        </div>
                        <div className="sixth-bottom">
                            <div className="bottom-left" style={{marginTop: '.15rem'}}>
                                <div className="left-img" style={{position: 'relative'}}>
                                    <img src={require('@src/public/img/组32.png')} alt="图片" style={{width: '3.3rem', height: '2.4rem'}}/>
                                    <span className="play-video video-extra" style={{left:'40%'}}><img src={require('@src/public/img/形状 1578.png')} alt="图片"/><span className="class-time">24:00</span></span>
                                </div>
                                <div className="left-one" style={{paddingTop: '.15rem'}}>
                                    <span className="class-span-common">运用道德经智慧指导...</span>
                                </div>
                                <div className="left-two" style={{marginTop: '.15rem'}}>
                                    <div className="two-bar">
                                        <span className="class-teacher">朱洁老师</span>
                                        <span className="center-split"/>
                                        <span className="class-count">2节</span>
                                    </div>
                                    <span className="class-price">¥94.00</span>
                                </div>
                            </div>
                            <div className="bottom-left" style={{marginTop: '.15rem'}}>
                                <div className="left-img" style={{position: 'relative'}}>
                                    <img src={require('@src/public/img/组33.png')} alt="图片" style={{width: '3.3rem', height: '2.4rem'}}/>
                                    <span className="play-video video-extra" style={{ left:'40%'}}><img src={require('@src/public/img/形状 1578.png')} alt="图片"/><span className="class-time">24:00</span></span>
                                </div>
                                <div className="left-one" style={{paddingTop: '.15rem'}}>
                                    <span className="class-span-common">运用道德经智慧指导...</span>
                                </div>
                                <div className="left-two" style={{marginTop: '.15rem'}}>
                                    <div className="two-bar">
                                        <span className="class-teacher">朱洁老师</span>
                                        <span className="center-split"/>
                                        <span className="class-count">2节</span>
                                    </div>
                                    <span className="class-price">¥94.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="sixth-bottom">
                            <div className="bottom-left" style={{marginTop: '.15rem'}}>
                                <div className="left-img" style={{position: 'relative'}}>
                                    <img src={require('@src/public/img/组34.png')} alt="图片" style={{width: '3.3rem', height: '2.4rem'}}/>
                                    <span className="play-video video-extra" style={{left:'40%'}}><img src={require('@src/public/img/形状 1578.png')} alt="图片"/><span className="class-time">24:00</span></span>
                                </div>
                                <div className="left-one" style={{paddingTop: '.15rem'}}>
                                    <span className="class-span-common">运用道德经智慧指导...</span>
                                </div>
                                <div className="left-two" style={{marginTop: '.15rem'}}>
                                    <div className="two-bar">
                                        <span className="class-teacher">朱洁老师</span>
                                        <span className="center-split"/>
                                        <span className="class-count">2节</span>
                                    </div>
                                    <span className="class-price">¥94.00</span>
                                </div>
                            </div>
                            <div className="bottom-left" style={{marginTop: '.15rem'}}>
                                <div className="left-img" style={{position: 'relative'}}>
                                    <img src={require('@src/public/img/组35.png')} alt="图片" style={{width: '3.3rem', height: '2.4rem'}}/>
                                    <span className="play-video video-extra" style={{left:'40%'}}><img src={require('@src/public/img/形状 1578.png')} alt="图片"/><span className="class-time">24:00</span></span>
                                </div>
                                <div className="left-one" style={{paddingTop: '.15rem'}}>
                                    <span className="class-span-common">运用道德经智慧指导...</span>
                                </div>
                                <div className="left-two" style={{marginTop: '.15rem'}}>
                                    <div className="two-bar">
                                        <span className="class-teacher">朱洁老师</span>
                                        <span className="center-split"/>
                                        <span className="class-count">2节</span>
                                    </div>
                                    <span className="class-price">¥94.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-bar">
                <div className="bar-box">
                    <img src={require('@src/public/img/组 26.png')} alt="图片"/>
                    攻守道
                </div>
                <div className="bar-box">
                    <img src={require('@src/public/img/形状 46.png')} alt="图片"/>
                    商城
                </div>
                <div className="bar-box" style={{marginLeft: '.2rem'}} onClick={this.buyVip.bind(this)}>
                    <img src={require('@src/public/img/组 26(1).png')} alt="图片" className="tab-special"/>
                    <span className="buyVip">购买VIP</span>
                </div>
                <div className="bar-box">
                    <img src={require('@src/public/img/形状 1581.png')} alt="图片"/>
                    我要分享
                </div>
                <div className="bar-box last-box">
                    <img src={require('@src/public/img/形状 45.png')} alt="图片"/>
                    会员中心
                </div>
            </div>
        </div>);
    }
}