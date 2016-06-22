var comps = require('../src/app.js').components;

var Container = comps.Container;
var Viewport = comps.Viewport;
var Tab = comps.Tab;


var App =
    <Viewport>
        <Container htmlComment="a container">
            <Tab theme="plain1"/>
        </Container>
    </Viewport>;

App.renderTo('body');