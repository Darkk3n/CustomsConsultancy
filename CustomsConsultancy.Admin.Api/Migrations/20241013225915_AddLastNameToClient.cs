using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CustomsConsultancy.Admin.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddLastNameToClient : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Clients",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Clients");
        }
    }
}
