var React = require('react');
var UI = require('UI');

var View = UI.View;
var Content = UI.Content;
var Grid = UI.Grid;
var List = UI.List;
var Icon = UI.Icon.Icon;
var Button = UI.Button.Button;



var ListItem = React.createClass({
    showPage(page) {
    	app.closePanel();
    	app.showView(page, 'left');
    },
    render() {
        return (
            <List.ItemContent link onTap={this.showPage.bind(this, this.props.page)}>
                <List.ItemMedia><Icon name="icon-f7" /></List.ItemMedia>
                <List.ItemInner>
                    <List.ItemTitle>{this.props.children}</List.ItemTitle>
                </List.ItemInner>
             </List.ItemContent>
        );
    }
});

var LeftPanel = React.createClass({
	render() {
		return (
            <div>
                <Content.ContentBlockTitle>Left Panel</Content.ContentBlockTitle>
                <Content.ContentBlock>
                    <p>This is a side panel. You can close it by clicking outsite or on this link: <Button onTap={app.hidePanel}>close me</Button>. You can put here anything, even another isolated view like in <Button onTap={showRightPanelFromLeft}>Right Panel</Button></p>
                </Content.ContentBlock>
                <Content.ContentBlockTitle>Framework7 Kitchen Sink</Content.ContentBlockTitle>
                <List.List block>
                    <ListItem page="button">Button</ListItem>
                    <ListItem page="toast">Toast</ListItem>
                </List.List>
                <Content.ContentBlock>
                    <p>Long text block goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem urna, gravida non scelerisque id, fringilla ac velit. Phasellus elementum a ipsum at ornare. Mauris sagittis rhoncus euismod. Integer convallis augue eu lacus ultrices, in dictum elit consequat. Nulla faucibus massa id felis egestas eleifend. Proin consequat dignissim magna ut scelerisque. Vestibulum ac lorem semper, posuere sapien nec, pharetra massa. Nulla a tellus facilisis, sollicitudin quam porta, aliquam lorem. Fusce dignissim eros ac diam molestie, ut ultrices lorem tristique. Ut facilisis augue ac nisi egestas malesuada. Nunc posuere tortor quis eleifend mollis. Aliquam erat volutpat. Donec feugiat elit tellus, nec convallis orci elementum in. Sed urna mi, vestibulum id tempus id, pretium et ante. Pellentesque eget sollicitudin ligula. Phasellus pellentesque velit eu porta suscipit.</p>
                </Content.ContentBlock>
            </div>
        )
	}
});


var RightPanel = React.createClass({
	render() {
		return (
            <div>
                <Content.ContentBlock>
                    <p>Long text block goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem urna, gravida non scelerisque id, fringilla ac velit. Phasellus elementum a ipsum at ornare. Mauris sagittis rhoncus euismod. Integer convallis augue eu lacus ultrices, in dictum elit consequat. Nulla faucibus massa id felis egestas eleifend. Proin consequat dignissim magna ut scelerisque. Vestibulum ac lorem semper, posuere sapien nec, pharetra massa. Nulla a tellus facilisis, sollicitudin quam porta, aliquam lorem. Fusce dignissim eros ac diam molestie, ut ultrices lorem tristique. Ut facilisis augue ac nisi egestas malesuada. Nunc posuere tortor quis eleifend mollis. Aliquam erat volutpat. Donec feugiat elit tellus, nec convallis orci elementum in. Sed urna mi, vestibulum id tempus id, pretium et ante. Pellentesque eget sollicitudin ligula. Phasellus pellentesque velit eu porta suscipit.</p>
                </Content.ContentBlock>
            </div>
        )
    }
});

function showLeftPanel() {
	app.params.swipePanel = 'left';
	app.showCover(<LeftPanel />, {type:'panel', side: 'left', is3d:true});
}


function showRightPanel() {
	app.params.swipePanel = 'right';
	app.showCover(<RightPanel />, {type:'panel', side: 'right', is3d:true});
}

function showRightPanelFromLeft() {
		app.closePanel();
		setTimeout(()=>{
			showRightPanel();
		}, 500);
}

module.exports = React.createClass({
	render() {
		return (
            <View.Page title="3D Panels">
                <View.PageContent>
                    <Content.ContentBlock>
                        <p>This 3D Panels plugin convert your "reveal"-effect panels to great looking 3D panels which are also available as a swipe-panels (try left one).</p>
                    </Content.ContentBlock>
                    <Content.ContentBlock>
                        <Grid.Row>
                            <Grid.Col per={50}><Button onTap={showLeftPanel}>Left Panel</Button></Grid.Col>
                            <Grid.Col per={50}><Button onTap={showRightPanel}>Right Panel</Button></Grid.Col>
                        </Grid.Row>
                    </Content.ContentBlock>
                </View.PageContent>
            </View.Page>
		);
	}
});
