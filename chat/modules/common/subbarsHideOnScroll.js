var React = require('react');
var UI = require('UI');

var View = UI.View;
var List = UI.List;
var Content = UI.Content;
var Icon = UI.Icon.Icon;
var Badge = UI.Badge.Badge;
var Button = UI.Button;
var Form = UI.Form;

module.exports = React.createClass({
    getInitialState: function() {
        return {
            link: 1
        }
    },
    switchLink: function(link) {
        this.setState({link:link});
    },
    render: function() {
        return (
            <View.Page navbar title="SubNavbar Hide On Scroll" scrollHideBar>
                <View.Navbar>
                    <View.NavbarTitle>List</View.NavbarTitle>
                    <View.SubNavbar>
                        <Button.ButtonsRow>
                            <Button.Button active={this.state.link===1} onTap={this.switchLink.bind(this, 1)}>Link 1</Button.Button>
                            <Button.Button active={this.state.link===2} onTap={this.switchLink.bind(this, 2)}>Link 2</Button.Button>
                            <Button.Button active={this.state.link===3} onTap={this.switchLink.bind(this, 3)}>Link 3</Button.Button>
                            <Button.Button active={this.state.link===4} onTap={this.switchLink.bind(this, 4)}>Link 4</Button.Button>
                        </Button.ButtonsRow>
                    </View.SubNavbar>
                </View.Navbar>
                <View.PageContent subnavbar scrollHideBar>
                    <Content.ContentBlock>
                       <p>Sub Navbar is useful when you need to put any additional elements into Navbar, like Tab Links or Search Bar. It also remains visible when Navbar hidden.</p>
                    </Content.ContentBlock>
                    <Content.ContentBlock>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at luctus dui. Praesent venenatis libero orci, in scelerisque enim tincidunt eget. Pellentesque id odio id enim consectetur condimentum. Maecenas dapibus tempus diam. Suspendisse cursus, est ut feugiat tempus, lectus odio aliquam dui, non suscipit lectus sapien vitae velit. Vestibulum tempus faucibus massa, et rutrum odio luctus finibus. Praesent aliquet accumsan magna, quis ornare elit scelerisque sit amet. Mauris commodo varius velit dictum dictum. Sed non sapien urna. Nunc porta vitae massa nec rutrum. Praesent et porttitor tortor, vitae tristique nibh. Morbi sed tempor tellus, sit amet pharetra ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis porta feugiat nisl sed blandit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at luctus dui. Praesent venenatis libero orci, in scelerisque enim tincidunt eget. Pellentesque id odio id enim consectetur condimentum. Maecenas dapibus tempus diam. Suspendisse cursus, est ut feugiat tempus, lectus odio aliquam dui, non suscipit lectus sapien vitae velit. Vestibulum tempus faucibus massa, et rutrum odio luctus finibus. Praesent aliquet accumsan magna, quis ornare elit scelerisque sit amet. Mauris commodo varius velit dictum dictum. Sed non sapien urna. Nunc porta vitae massa nec rutrum. Praesent et porttitor tortor, vitae tristique nibh. Morbi sed tempor tellus, sit amet pharetra ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis porta feugiat nisl sed blandit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at luctus dui. Praesent venenatis libero orci, in scelerisque enim tincidunt eget. Pellentesque id odio id enim consectetur condimentum. Maecenas dapibus tempus diam. Suspendisse cursus, est ut feugiat tempus, lectus odio aliquam dui, non suscipit lectus sapien vitae velit. Vestibulum tempus faucibus massa, et rutrum odio luctus finibus. Praesent aliquet accumsan magna, quis ornare elit scelerisque sit amet. Mauris commodo varius velit dictum dictum. Sed non sapien urna. Nunc porta vitae massa nec rutrum. Praesent et porttitor tortor, vitae tristique nibh. Morbi sed tempor tellus, sit amet pharetra ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis porta feugiat nisl sed blandit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at luctus dui. Praesent venenatis libero orci, in scelerisque enim tincidunt eget. Pellentesque id odio id enim consectetur condimentum. Maecenas dapibus tempus diam. Suspendisse cursus, est ut feugiat tempus, lectus odio aliquam dui, non suscipit lectus sapien vitae velit. Vestibulum tempus faucibus massa, et rutrum odio luctus finibus. Praesent aliquet accumsan magna, quis ornare elit scelerisque sit amet. Mauris commodo varius velit dictum dictum. Sed non sapien urna. Nunc porta vitae massa nec rutrum. Praesent et porttitor tortor, vitae tristique nibh. Morbi sed tempor tellus, sit amet pharetra ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis porta feugiat nisl sed blandit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at luctus dui. Praesent venenatis libero orci, in scelerisque enim tincidunt eget. Pellentesque id odio id enim consectetur condimentum. Maecenas dapibus tempus diam. Suspendisse cursus, est ut feugiat tempus, lectus odio aliquam dui, non suscipit lectus sapien vitae velit. Vestibulum tempus faucibus massa, et rutrum odio luctus finibus. Praesent aliquet accumsan magna, quis ornare elit scelerisque sit amet. Mauris commodo varius velit dictum dictum. Sed non sapien urna. Nunc porta vitae massa nec rutrum. Praesent et porttitor tortor, vitae tristique nibh. Morbi sed tempor tellus, sit amet pharetra ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis porta feugiat nisl sed blandit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at luctus dui. Praesent venenatis libero orci, in scelerisque enim tincidunt eget. Pellentesque id odio id enim consectetur condimentum. Maecenas dapibus tempus diam. Suspendisse cursus, est ut feugiat tempus, lectus odio aliquam dui, non suscipit lectus sapien vitae velit. Vestibulum tempus faucibus massa, et rutrum odio luctus finibus. Praesent aliquet accumsan magna, quis ornare elit scelerisque sit amet. Mauris commodo varius velit dictum dictum. Sed non sapien urna. Nunc porta vitae massa nec rutrum. Praesent et porttitor tortor, vitae tristique nibh. Morbi sed tempor tellus, sit amet pharetra ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis porta feugiat nisl sed blandit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at luctus dui. Praesent venenatis libero orci, in scelerisque enim tincidunt eget. Pellentesque id odio id enim consectetur condimentum. Maecenas dapibus tempus diam. Suspendisse cursus, est ut feugiat tempus, lectus odio aliquam dui, non suscipit lectus sapien vitae velit. Vestibulum tempus faucibus massa, et rutrum odio luctus finibus. Praesent aliquet accumsan magna, quis ornare elit scelerisque sit amet. Mauris commodo varius velit dictum dictum. Sed non sapien urna. Nunc porta vitae massa nec rutrum. Praesent et porttitor tortor, vitae tristique nibh. Morbi sed tempor tellus, sit amet pharetra ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis porta feugiat nisl sed blandit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at luctus dui. Praesent venenatis libero orci, in scelerisque enim tincidunt eget. Pellentesque id odio id enim consectetur condimentum. Maecenas dapibus tempus diam. Suspendisse cursus, est ut feugiat tempus, lectus odio aliquam dui, non suscipit lectus sapien vitae velit. Vestibulum tempus faucibus massa, et rutrum odio luctus finibus. Praesent aliquet accumsan magna, quis ornare elit scelerisque sit amet. Mauris commodo varius velit dictum dictum. Sed non sapien urna. Nunc porta vitae massa nec rutrum. Praesent et porttitor tortor, vitae tristique nibh. Morbi sed tempor tellus, sit amet pharetra ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis porta feugiat nisl sed blandit.</p>
                    </Content.ContentBlock>
                </View.PageContent>
                <View.Toolbar tabbar labels>
                    <View.ToolbarButton active={true}
                        icon={["icon-camera", "icon-back"]}>
                       Edit
                    </View.ToolbarButton>
                </View.Toolbar>
            </View.Page>
        );
    }
});
