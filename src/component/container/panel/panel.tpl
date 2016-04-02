<div class="panel" style="<%= obj.parsedStyle %>">
    <div class="header">
        <div class="title">
            <div class="orangeLine"></div>
            <div class="titleContent"><%= obj.options.title %></div>
            <div class="seperator"></div>
        </div>
        <% if(obj.options.moreBtn){%>
        <div class="link"><%=obj.options.moreBtn%></div>
        <%}%>
    </div>
    <div class="panelBody body">
        <%= obj.content %>
    </div>
</div>