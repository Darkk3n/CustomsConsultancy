using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CustomsConsultancy.Admin.Api.Migrations
{
    /// <inheritdoc />
    public partial class RenameCourseField : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Course");

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Course",
                type: "INTEGER",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Course");

            migrationBuilder.AddColumn<bool>(
                name: "Status",
                table: "Course",
                type: "INTEGER",
                maxLength: 20,
                nullable: true);
        }
    }
}
