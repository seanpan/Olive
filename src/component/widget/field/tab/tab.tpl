<div class="field tab <%= obj.options.theme %>" style="<%= obj.parsedStyle %>">
    <% _.each(obj.options.data, function(item){ %>
        <a href="#" class="tab-item<%= item.active?' active':'' %>"><%= item.name %></a>
    <% }); %>
</div>