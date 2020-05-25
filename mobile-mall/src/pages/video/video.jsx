import React, { Component } from "react";
import {Icon, Tabs, WhiteSpace, List} from 'antd-mobile';
import './video.less';

const { Item } = List;
export default class Help extends Component{

    render() {

        const tabs = [
            { title: '互动' },
            { title: '介绍' },
            { title: '目录' },
            { title: '评价' },
            { title: '边看边买' },
            { title: '榜单'}
        ];

        const TabExample = () => (
            <div>
                <Tabs tabs={tabs}
                      initialPage={0}
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{  backgroundColor: '#F6F6F6' }}>

                    </div>
                    <div style={{ backgroundColor: '#ffffff'}} className="introduction">
                        <div className="introduction-top">
                            <img src={require('@src/public/img/组26.png')} alt="图片"/>
                        </div>
                        <div className="method-talk">
                            <h3>学习考霸方法论</h3>
                            <p>成长逆袭必修课：人生就是一场场考试 掌握未来最具有价值的个人能力</p>
                            <div className="card-list">
                                <div className="each-card">
                                    <img src={require('@src/public/img/思维导图 .png')} alt="实战"/>
                                    <div className="card-right">
                                        <h5>实战思维</h5>
                                        <p>先导课《一套思维模型通关所有考试》，高效易操作实战。</p>
                                    </div>
                                </div>
                                <div className="each-card">
                                    <img src={require('@src/public/img/实战训练 (1).png')} alt="实战"/>
                                    <div className="card-right">
                                        <h5>对标思维</h5>
                                        <p>音频分享，老师顶级学员，对标清华北大，思维锁定极致水平。</p>
                                    </div>
                                </div>
                                <div className="each-card">
                                    <img src={require('@src/public/img/实战演练.png')} alt="实战"/>
                                    <div className="card-right">
                                        <h5>上瘾思维</h5>
                                        <p>将知识、技能、目标粉末化，掌握快速学习上瘾、自信突增。</p>
                                    </div>
                                </div>
                                <div className="each-card">
                                    <img src={require('@src/public/img/head.png')} alt="实战"/>
                                    <div className="card-right">
                                        <h5>科学思维</h5>
                                        <p>训练营中方法和技术具有</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#ffffff' }} className="search-list">
                        <div className="search-bar">
                            <img src={require('@src/public/img/search-pic.png')} alt="搜索"/>
                        </div>
                        <div className="content-fifth">
                            <div className="eighth-content">
                                <div className="flex-row">
                                    <div className="row-left">
                                        <img src={require('@src/public/img/组29.png')} alt="图片"/>
                                    </div>
                                    <div className="row-right">
                                        <div className="floor">
                                            <div className="right-row-left">
                                                <span className="class-span-common">贴身卫拳</span>
                                            </div>
                                            <div className="right-row-right">
                                                <span className="class-span-try">试看</span>
                                            </div>
                                        </div>
                                        <div className="floor1">
                                            <span className="class-teacher">未知老师</span>
                                            <span className="center-split"/>
                                            <span className="class-count">1节</span>
                                        </div>
                                        <div className="floor2">
                                            <div className="floor2-left">
                                                <span className="class-price" style={{marginLeft: '.2rem'}}>¥110.00</span>
                                                <span className="class-old-price" style={{marginLeft: '.15rem'}}>¥99.00</span>
                                            </div>
                                            <div className="right-row-right">
                                                <span className="vip-free" style={{marginRight: '0'}}>VIP免费</span>
                                            </div>
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
                                                <span className="class-span-common">贴身卫拳</span>
                                            </div>
                                            <div className="right-row-right">
                                                <span className="class-span-try">试看</span>
                                            </div>
                                        </div>
                                        <div className="floor1">
                                            <span className="class-teacher">未知老师</span>
                                            <span className="center-split"/>
                                            <span className="class-count">1节</span>
                                        </div>
                                        <div className="floor2">
                                            <div className="floor2-left">
                                                <span className="class-price" style={{marginLeft: '.2rem'}}>¥110.00</span>
                                                <span className="class-old-price" style={{marginLeft: '.15rem'}}>¥99.00</span>
                                            </div>
                                            <div className="right-row-right">
                                                <span className="vip-free" style={{marginRight: '0'}}>VIP免费</span>
                                            </div>
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
                                                <span className="class-span-common">贴身卫拳</span>
                                            </div>
                                            <div className="right-row-right">
                                                <span className="class-span-try">试看</span>
                                            </div>
                                        </div>
                                        <div className="floor1">
                                            <span className="class-teacher">未知老师</span>
                                            <span className="center-split"/>
                                            <span className="class-count">1节</span>
                                        </div>
                                        <div className="floor2">
                                            <div className="floor2-left">
                                                <span className="class-price" style={{marginLeft: '.2rem'}}>¥110.00</span>
                                                <span className="class-old-price" style={{marginLeft: '.15rem'}}>¥99.00</span>
                                            </div>
                                            <div className="right-row-right">
                                                <span className="vip-free" style={{marginRight: '0'}}>VIP免费</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        {/*<img src={require('@src/public/img/commentEmpty.png')} alt="评价"/>*/}
                        <List className="comment-list">
                            <Item>
                                <div className="item-top">
                                   <div className="top-left">
                                       <img src={require('@src/public/img/commentEmpty.png')} alt="头像"/>
                                       <div className="top-message">
                                           <span>欣欣向荣</span>
                                           <span>1小时前</span>
                                       </div>
                                   </div>
                                    <div className="right-love">
                                        <img src={require('@src/public/img/star.png')} alt="收藏"/>
                                        <span>1020</span>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <p>课程很实用，谢谢店家，课程很实用，谢谢店家课程很实用，谢谢店家</p>
                                </div>
                            </Item>
                            <Item>
                                <div className="item-top">
                                    <div className="top-left">
                                        <img src={require('@src/public/img/commentEmpty.png')} alt="头像"/>
                                        <div className="top-message">
                                            <span>树大招风</span>
                                            <span>1小时前</span>
                                        </div>
                                    </div>
                                    <div className="right-love">
                                        <img src={require('@src/public/img/star.png')} alt="收藏"/>
                                        <span>1020</span>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <p>课程很实用，谢谢店家，课程很实用，谢谢店家课程很实用，谢谢店家</p>
                                </div>
                            </Item>
                        </List>
                    </div>
                    <div style={{ backgroundColor: '#F6F6F6' }}>
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        );

        return (<div id="video">
            <div className="help-head">
                <div className="head-top">
                    <div className="arrow-left">
                        <Icon type="left"/>
                    </div>
                    <img src={require('@src/public/img/threePoint.png')} alt="菜单"/>
                </div>
                <div className="head-bottom">
                    <img src={require('@src/public/img/pause.png')} alt="暂停"/>
                    <div className="process-bar">
                        <span>00:31</span>
                        <div className="process-length">
                            <img src={require('@src/public/img/play.png')} alt="进度条"/>
                        </div>
                        <span>20:30</span>
                        <img src={require('@src/public/img/screen.png')} alt="全屏" className="screen"/>
                    </div>
                </div>
            </div>
            <div className="head-content">
                <div className="content-first">
                    <div className="first-message">
                        <h3>微管家培训</h3>
                        <span className="vip-free">VIP免费</span>
                    </div>
                    <div className="first-right">
                        <span>简介</span>
                        <img src={require('@src/public/img/arrow-right.png')} alt="简介"/>
                    </div>
                </div>
                <div className="content-second">
                    <p>李刚老师 . 20节/2节 . <span style={{color: '#5599FF'}}>江苏微管家培训机构</span> . 3.89万人在学习</p>
                </div>
                <div className="content-third">
                    <span className="class-price">¥110.00</span>
                    <div className="button-area">
                        <span className="class-buy">购买课程</span>
                        <span className="class-vip">加入VIP</span>
                    </div>
                </div>
            </div>
            <div className="help-tab">
                <TabExample/>
            </div>
            <div className="help-bottom">
               {/* <input type="text" placeholder="请输入评论..."/>*/}
              <div className="bottom-intro">
                  <div className="bottom-left">
                      <div className="left-one">
                          <img src={require('@src/public/img/首 页.png')} alt="首页"/>
                          <span>首页</span>
                      </div>
                      <div className="left-one">
                          <img src={require('@src/public/img/旺旺.png')} alt="首页"/>
                          <span>资讯</span>
                      </div>
                      <div className="left-one">
                          <img src={require('@src/public/img/礼物 (1).png')} alt="首页"/>
                          <span>送好友</span>
                      </div>
                  </div>
                  <div className="bottom-right">
                      立即购买
                  </div>
              </div>
            </div>
        </div>);
    }
}