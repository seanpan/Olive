<div class="field courseList" style="<%= obj.parsedStyle %>">
    <% _.each(obj.options.data, function(oneData, index){
    if(oneData.items){
    %>
    <div class="summaryTitle"><%=oneData.name%></div>
    <%
    _.each(oneData.items, function(course, i){
    %>
    <div class="courseItemWrapper">
        <div class="courseItem">
            <div class="index-block"><%=i%></div>
            <%= course.name %>
            <span class="icon-span"><em class="icon-camera"></em></span>
            <span class="duration"><%=course.time%></span>
            <a class="btn"></a>
            <%
            var state = course.state;
            var parsedState;
            var text;
            if(state==='complete'){
            parsedState = 'complete';
            text = '学习完成';
            }
            else if(state==='incomplete'||state===undefined){
            parsedState = 'incomplete';
            text = '暂未学习';
            }
            else{
            parsedState = 'paused';
            text = '上次学习至';
            }
            %>
            <span class="state <%=parsedState%>"><%=text%><span class="pause-time"><%= parsedState === 'paused'?state:'' %></span></span>
        </div>
    </div>
    <%
    });
    %>
    <div class="separator"></div>
    <%
    }else{
    var course = oneData;
    %>
    <div class="courseItemWrapper">
        <div class="courseItem">
            <div class="index-block"><%=index%></div>
            <%= course.name %>
            <span class="icon-span"><em class="icon-camera"></em></span>
            <span class="duration"><%=course.time%></span>
            <a class="btn"></a>
            <%
            var state = course.state;
            var parsedState;
            var text;
            if(state==='complete'){
            parsedState = 'complete';
            text = '学习完成';
            }
            else if(state==='incomplete'||state===undefined){
            parsedState = 'incomplete';
            text = '暂未学习';
            }
            else{
            parsedState = 'paused';
            text = '上次学习至';
            }
            %>
            <span class="state <%=parsedState%>"><%=text%><span class="pause-time"><%= parsedState === 'paused'?state:'' %></span></span>
        </div>
    </div>
    <%
    }
    }) %>
</div>