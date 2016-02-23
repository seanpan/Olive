<div id="<%= obj.id %>" class="field recommend">
    <div class="recommend_tab_bar">
        <% _.each(obj.options.data.data, function(item, index){ %>
        <div class="recommend_tab<%= obj.options.data.activeIndex===index?' active': '' %>"><%= item.tabName %></div>
        <% }) %>
    </div>
    <% _.each(obj.options.data.data, function(item, index){ %>
    <div class="nano recommend_content<%= obj.options.data.activeIndex!==index?' hidden': '' %>">
        <div class="nano-content">
            <% _.each(item.items, function(item, index){ %>

                <% if (item.type==='preview'){ %>
                <div class="recommend_content_item preview">
                    <div class="recommend_content_item_main">
                        <div class="pic-wrapper">
                            <img src="<%= item.img %>">
                            <div class="time"><%= item.time %></div>
                        </div>
                        <div class="info-wrapper">
                            <div class="title"><%= item.name %></div>
                            <div class="count"><%= item.count %>人已学</div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <% }else{ %>
                <div class="recommend_content_item series">
                    <div class="recommend_content_item_main">
                        <div class="recommend_content_item_name"><%= item.name %></div>
                        <div class="recommend_content_item_info">
                            <div class="recommend_content_item_count">共<%= item.count %>节</div>
                            <div class="recommend_content_item_expand"></div>
                        </div>
                    </div>
                    <div class="recommend_content_item_detail hidden">
                        <% _.each(item.items, function(item, index){ %>
                        <% if (item.items){ %>
                        <div class="summary"><%= item.name %></div>
                        <% _.each(item.items, function(item, index){ %>
                        <div class="course">
                            <div class="index-block"><%= index + 1 %></div>
                            <%= item.name %>
                            <div class="time-period"><%= item.time %></div>
                        </div>
                        <% }) %>
                        <% }else{ %>
                        <div class="course">
                            <div class="index-block"><%= index + 1 %></div>
                            <%= item.name %>
                            <div class="time-period"><%= item.time %></div>
                        </div>
                        <% } %>
                        <% }) %>

                    </div>
                </div>
                <% } %>
            <% }) %>
        </div>
    </div>
    <% }) %>
</div>
