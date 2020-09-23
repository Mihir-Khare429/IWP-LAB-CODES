<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:param name="deploymentMode"></xsl:param>
<xsl:template match="/"> 
 <html> 
  <body> 
  <input type="text" placeholder="Enter the Word"></input>
    <h1 align="center">Student Result Record</h1>
    <table border="3" align="center" width="500px" height="500px"> 
      <tr> 
        <th>Word</th> 
        <th>Synonym</th> 
        <th>Antonym</th>
      </tr> 
      <xsl:for-each select="words/word"> 
        
          <tr bgcolor = "#9acd32" align="center"> 
            <td><xsl:value-of select="name"/></td> 
            <td><xsl:value-of select="antonym"/></td> 
            <td><xsl:value-of select="synonym"/></td>  
          </tr> 
        
      </xsl:for-each> 
    </table> 
  </body> 
</html> 
</xsl:template> 
</xsl:stylesheet>