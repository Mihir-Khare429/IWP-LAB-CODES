<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/"> 
 <html> 
  <body> 
    <h1 align="center">Student Result Record</h1> 
    <table border="3" align="center" width="500px" height="500px"> 
      <tr> 
        <th>Name</th> 
        <th>Marks</th> 
        <th>Result</th>
      </tr> 
      <xsl:for-each select="student-record/student"> 
        <xsl:if test = "marks > 33"> 
          <tr bgcolor = "#9acd32" align="center"> 
            <td><xsl:value-of select="name"/></td> 
            <td><xsl:value-of select="marks"/></td> 
            <td><xsl:value-of select="result"/></td>  
          </tr> 
        </xsl:if>
        <xsl:if test = "marks &lt; 33"> 
          <tr bgcolor = "#FF0000" align="center"> 
            <td><xsl:value-of select="name"/></td> 
            <td><xsl:value-of select="marks"/></td> 
            <td><xsl:value-of select="result"/></td>  
          </tr> 
        </xsl:if>
      </xsl:for-each> 
    </table> 
  </body> 
</html> 
</xsl:template> 
</xsl:stylesheet>