import React, { Component } from "react";
import './incomeRule.less';

export default class IncomeRule extends Component{
    initDom = () => {
        document.querySelector('html').style.overflow = 'hidden';
    };

    computedModal () {
        this.props.openModal();
    }

    componentDidMount() {
        this.initDom();
    }

    componentWillUnmount() {
        document.querySelector('html').style.overflow = 'auto';
    }

    render() {
        return (<div id="income-rule">
            <div className="center-rule">
                <h1>提现规则</h1>
                <p>1.个人每天最少提现100元，每日最多提现 10000元。</p>
                <p>2.提现申请成功后,一般在1-3个工作日审核 完成并打款。</p>
                <p>3.提现会缴纳个人所得税。2017年11月1日 起，个人主播月累计提现超出800元的部分，
                    需要按照5%的税率计算税金，提现申,提现会缴纳个人所得税。2017年11月1日 起，个人主播月累计提现超出800元的部分，
                    需要按照5%的税率计算税金，提现申</p>
                <p>4.提现记录请在我的收益提现记录中查看。</p>
            </div>
            <div className="close">
                <img src={require('@src/public/img/close.png')} alt="图片" onClick={this.computedModal.bind(this)}/>
            </div>
        </div>);
    }
}