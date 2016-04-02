<div id="<%= obj.id %>" class="field linkField" style="<%= obj.parsedStyle %>">
    <%if(obj.options.label){%>
    <label class="<%= obj.options.labelAlign==='top'?'alignTop':'' %>"><%= obj.options.label+":" %></label>
    <%}%>
    <% if(typeof obj.options.data==='string'){%>
    <% if(obj.options.isListItem){%><span>·</span><%}%>
    <a class="link <%= obj.options.underline===true?'underline':'' %>"><%= obj.options.data %></a>
    <%}else{%>
    <% _.each(obj.options.data, function(item){ %>
    <a class="link <%= obj.options.underline===true?'underline':'' %>"><%= item %></a>
    <% }) %>
    <%}%>
</div>