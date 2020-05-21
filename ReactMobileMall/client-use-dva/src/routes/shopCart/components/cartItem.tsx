import React, { Component } from "react";
import { Row, Col } from "antd";
import { connect } from "dva";
import Iconfont from 'components/iconfont/index'

interface Props {
  cartItem: any,
  dispatch?: (args) => void,
}
interface State {
  ifChecked: boolean
}
@connect(({ shopCart }) => ({ shopCart }))
class cartItem extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      ifChecked: true
    };
  }
  //切换是否选中该商品
  toggleCheck = goodId => {
    const { dispatch } = this.props;
    if (this.state.ifChecked) {
      this.setState({
        ifChecked: false
      });
      dispatch({
        type: "shopCart/popThisFromBalance",
        payload: {
          goodId,
          bool: true
        }
      });
    } else {
      this.setState({
        ifChecked: true
      });
      dispatch({
        type: "shopCart/popThisFromBalance",
        payload: {
          goodId,
          bool: false
        }
      });
    }
  };

  changeNum = (num, goodId, way) => {
    const { dispatch } = this.props;
    if (way > 0) {
      dispatch({
        type: "shopCart/changeNum",
        payload: {
          goodId,
          way
        }
      });
    } else if (way < 0) {
      if (num === 0) {
        return;
      } else {
        dispatch({
          type: "shopCart/changeNum",
          payload: {
            goodId,
            way
          }
        });
      }
    }
  };

  removeThisGood = goodId => {
    this.props.dispatch({ type: "shopCart/removeFromCart", payload: goodId });
  };
  componentDidMount() {
    this.setState({
      ifChecked: this.props.cartItem.isSelect
    });
  }
  render() {
    const { cartItem } = this.props;
    const active = { color: "#1afa29" };
    const iconStyle = { fontSize: ".5rem" };
    const common = { color: "#8a8a8a" };
    const flexBox = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    return (
      <div className="cart-item bg-fff">
        <Row style={flexBox}>
          <Col
            span={4}
            onClick={() => {
              this.toggleCheck(cartItem.goodId);
            }}
          >
            <div className="flex-box">
              {this.state.ifChecked ? (
                <Iconfont name="selected" {...active} style={{ ...iconStyle, }} />

              ) : (
                  <Iconfont name="yuancircle46" {...common} style={{ ...iconStyle, }} />


                )}
            </div>
          </Col>
          <Col span={16}>
            <div>
              <Row className="flex-box">
                <Col span={5} className="flex-box">
                  <img
                    className="good-img"
                    src={cartItem.imgs[0]}
                    alt=""
                  />
                </Col>
                <Col span={19} className="flex-box flex-ver-box flex-al-st">
                  <p>{cartItem.name}</p>
                  <p>
                    售价:{cartItem.price}元 合计：
                    {cartItem.price * cartItem.number}元
                  </p>
                  <div className="flex-box ">
                    <div
                      className="desc t-tc"
                      onClick={() =>
                        this.changeNum(cartItem.number, cartItem.goodId, -1)
                      }
                    >
                      -
                    </div>
                    <div className="num t-tc">{cartItem.number}</div>
                    <div
                      className="plus t-tc"
                      onClick={() =>
                        this.changeNum(cartItem.number, cartItem.goodId, 1)
                      }
                    >
                      +
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={4}>
            <div className="flex-box">
            <Iconfont name="shanchu" {...common} style={{ ...iconStyle, }} onClick={() => this.removeThisGood(cartItem.goodId)} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default cartItem;
