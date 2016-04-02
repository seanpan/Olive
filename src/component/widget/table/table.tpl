<%
var data  = obj.options.data;
var ths = data.shift(0);
%>
<div class="olive-table" style="<%= obj.parsedStyle %>">
    <table>
        <thead>
        <tr>
            <% _.each(ths, function(th){ %>
            <th><%= th %></th>
            <% }) %>
        </tr>
        </thead>
        <tbody>
        <% _.each(data, function(row){ %>
        <tr>
            <% for(var i = 0,len = ths.length;i < len;i++){ %>
            <td>
                <% if(row[i]){ %>
                <%= row[i] %>
                <% }else{
                    _.each(obj.tool, function(tool){
                %>
                <%= tool._parseHtml().outerHTML %>
                <%
                })
                }
                %>

            </td>
            <% } %>
        </tr>
        <% }) %>
        </tbody>
    </table>
</div>