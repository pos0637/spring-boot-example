import React, { Component } from 'react';
import { Layout, Menu, Button, Icon, Badge } from 'antd';
import { AsyncButton } from '../components/common';
import './Home.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

/**
 * 首页
 */
export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            currentMenu: '9', // 当前选中菜单项目
            collapsed: false, // 侧边栏是否折叠
            mode: 'inline' // 菜单模式
        };
    }

    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Sider
                    style={{ overflow: 'auto' }}
                    collapsed={this.state.collapsed}
                    onCollapse={(collapsed) => this._onCollapse(collapsed)}
                >
                    <div className="logo" />
                    <Menu theme="dark"
                        mode={this.state.mode}
                        defaultSelectedKeys={['6']}
                        selectedKeys={[this.state.currentMenu]}
                        onClick={(e) => this._onMenuClick(e)}
                    >
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span className="nav-text">系统管理</span></span>}
                        >
                            <Menu.Item key="1">用户管理</Menu.Item>
                            <Menu.Item key="2">角色管理</Menu.Item>
                            <Menu.Item key="3">权限管理</Menu.Item>
                            <Menu.Item key="4">模块管理</Menu.Item>
                            <Menu.Item key="5">字典管理</Menu.Item>
                            <Menu.Item key="6">用户信息</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span className="nav-text">设备管理</span></span>}
                        >
                            <Menu.Item key="7">区域管理</Menu.Item>
                            <Menu.Item key="8">设备管理</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <span>
                                <Icon type="desktop" />
                                <span className="nav-text">实时信息</span>
                            </span>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <span>
                                <Icon type="bell" />
                                <span className="nav-text">告警信息</span>
                            </span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ padding: 0 }}>
                        <div style={{ float: 'right', paddingRight: '20px' }}>
                            <Badge overflowCount={99} count={5}>
                                <span className="bell-icon-background" onClick={() => this._onAlertButtonClick()}>
                                    <Icon type="bell" className="bell-icon" />
                                </span>
                            </Badge>
                            <span style={{ paddingLeft: '20px', paddingRight: '50px', color: '#fff' }}>用户名</span>
                            <Button type="danger" icon="poweroff">注销</Button>
                            <AsyncButton type="danger" icon="poweroff" onClick={(sender) => this._onLogoutButtonClick(sender)}>注销</AsyncButton>
                        </div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            ...
                            <br />
                            Really
                            <br />...<br />...<br />...<br />
                            long
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />
                            content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        南都蓄电池化成监控系统 ©2017 Created by 福建福容软件有限公司
                    </Footer>
                </Layout>
            </Layout>
        );
    }

    /**
     * 侧边栏折叠事件处理函数
     * 
     * @param {bool} collapsed 是否折叠
     */
    _onCollapse(collapsed) {
        this.setState({
            collapsed: collapsed,
            mode: collapsed ? 'vertical' : 'inline'
        });
    }

    /**
     * 菜单栏点击事件处理函数
     * 
     * @param {any} e 事件
     */
    _onMenuClick(e) {
        this.setState({
            currentMenu: e.key
        });
    }

    /**
     * 实时告警角标点击事件处理函数
     */
    _onAlertButtonClick() {
        alert('123');
    }

    _onLogoutButtonClick(sender) {
        sender.complete();
    }
}