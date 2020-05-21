import React, { Component } from "react";
import { Row, Col } from "antd";

//路由相关
import { Link } from "dva/router";
//
import { connect } from "dva";
import Iconfont from 'components/iconfont/index'

interface Props{
  goodInfo:any,
  dispatch?:(args)=>void,
  shopCart?:any
}
@connect(({ shopCart }) => ({ shopCart }))
class GoodFooter extends Component<Props> {
  addToCart = () => {
    const { goodInfo,dispatch } = this.props;
    dispatch({
      type: "shopCart/addToCart",
      payload: {
        goodId: goodInfo.goodId,
        goodInfo,
        toPath:'/shopCart'
      }
    });
  };
  balanceThisGood = () => {
    const { goodInfo ,dispatch} = this.props;
    dispatch({
      type: "shopCart/addToCart",
      payload: {
        goodId: goodInfo.goodId,
        goodInfo,
        toPath:"/balance"
      }
    });
  };
  componentDidMount() {
    // console.log( this.context)
  }
  render() {
    const iconStyle = { fontSize: ".4rem" };
    const common = { color: "#8a8a8a" };
    return (
      <div className="good-footer ">
        <Row>
          <Col span={5}>
            <Link to={`/`} className="flex-box flex-ver-box btn-1">
              <Iconfont name="weibiaoti1" {...common} size={20} />
              <span>主页</span>
            </Link>
          </Col>
          <Col span={5}>
            <Link to={`/classify`} className="flex-box flex-ver-box btn-1">
              <Iconfont name="fenleitianchong"  {...common} size={20} />
              <span>分类</span>
            </Link>
          </Col>
          <Col span={7} className=" btn-2" onClick={this.addToCart}>
            <div className="flex-box">加入购物车</div>
          </Col>
          <Col span={7} className=" btn-3" onClick={this.balanceThisGood}>
            <div className="flex-box">
              <span className="color-fff">立即购买</span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default (GoodFooter);
