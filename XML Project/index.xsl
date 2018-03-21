<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
				xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
				xmlns="http://www.w3.org/1999/xhtml"> 
<xsl:template match="/students">
<html>
	<head>
		<title>CBIT STUDENTS</title>
		<link rel="stylesheet" href="stu.css" />
	</head>
<body>

<table id="tab" border="1" width="100%" bgcolor="lightblue">
<caption>CBIT STUDENTS</caption>
<tr bgcolor="black">
	<th>PHOTO</th>
	<th>NAME</th>
	<th>ROLLNO</th>
	<th>DEPT</th>
	<th>GENDER</th>
	<th>EMAIL</th>
	<th>DOB</th>
	<th colspan="2">PHONES</th>
	<th colspan="4">RESULT</th>
</tr>
<xsl:for-each select="/students/student">
<xsl:sort  select="dept" data-type="text" order="ascending"/>
<tr>
	<td><img><xsl:attribute name="src">
				<xsl:value-of select="image"/>
			</xsl:attribute>
		</img>
	</td>
	<td><xsl:value-of select="name" /></td>
	<td><xsl:value-of select="rollno" /></td>
	<td><xsl:value-of select="dept" /></td>
	<td><xsl:value-of select="gender" /></td>
	
	<td><xsl:value-of select="email" /></td>
	<td><xsl:value-of select="dob" /></td>
	
	<xsl:for-each select="phone">
		<td><xsl:value-of select="text()" /></td>
	</xsl:for-each>
	
<xsl:for-each select="results/result">
	<td width="40px"><xsl:value-of select="@course" /></td>
		<td width="40px"><xsl:value-of select="@grade" /></td>
	</xsl:for-each>


	
</tr>
</xsl:for-each>

</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
