<div class="field text" style="<%= obj.parsedStyle %>">
    <% if(obj.options.label){%>
        <label class="<%= obj.options.labelAlign==='top'?'alignTop':'' %>"><%= obj.options.label+":" %></label>
    <% } %>
    <%= obj.options.data %>
</div>